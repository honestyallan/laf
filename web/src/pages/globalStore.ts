import { createStandaloneToast } from "@chakra-ui/react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { APP_STATUS, CHAKRA_UI_COLOR_MODE_KEY } from "@/constants";
import { formatPort } from "@/utils/format";

import { TApplicationDetail, TRegion, TRuntime } from "@/apis/typing";
import { ApplicationControllerUpdateState } from "@/apis/v1/applications";
import { AuthControllerGetProfile } from "@/apis/v1/profile";
import { RegionControllerGetRegions } from "@/apis/v1/regions";
import { AppControllerGetRuntimes } from "@/apis/v1/runtimes";

const { toast } = createStandaloneToast();

type State = {
  userInfo: Definitions.UserWithProfile | undefined;
  loading: boolean;
  runtimes?: TRuntime[];
  regions?: TRegion[];
  currentApp: TApplicationDetail | any;
  setCurrentApp(app: TApplicationDetail | any): void;
  init(appid?: string): void;
  updateCurrentApp(app: TApplicationDetail, state: APP_STATUS): void;
  deleteCurrentApp(): void;
  currentPageId: string | undefined;
  setCurrentPage: (pageId: string) => void;

  visitedViews: string[];

  showSuccess: (text: string | React.ReactNode) => void;
  showInfo: (text: string | React.ReactNode) => void;
  showError: (text: string | React.ReactNode) => void;
};

const useGlobalStore = create<State>()(
  devtools(
    immer((set, get) => ({
      userInfo: undefined,

      currentApp: undefined,

      loading: true,

      currentPageId: undefined,

      visitedViews: [],

      setCurrentPage(pageId) {
        set((state) => {
          state.currentPageId = pageId;
          if (!state.visitedViews.includes(pageId)) {
            state.visitedViews.push(pageId);
          }
        });
      },

      init: async () => {
        const userInfo = get().userInfo;
        if (userInfo?._id) {
          return;
        }

        const userInfoRes = await AuthControllerGetProfile({});

        const runtimesRes = await AppControllerGetRuntimes({});
        const regionsRes = await RegionControllerGetRegions({});

        set((state) => {
          state.userInfo = userInfoRes.data;
          state.loading = false;
          state.runtimes = runtimesRes.data;
          state.regions = regionsRes.data;
        });
      },

      updateCurrentApp: async (app: TApplicationDetail, newState: APP_STATUS) => {
        if (!app) {
          return;
        }
        const restartRes = await ApplicationControllerUpdateState({
          state: newState,
        });
        if (!restartRes.error) {
          set((state) => {
            if (state.currentApp) {
              state.currentApp.phase =
                newState === APP_STATUS.Restarting ? "Restarting" : "Stopping";
            }
          });
        }
      },

      deleteCurrentApp: async () => {
        const app = get().currentApp;
        if (!app) {
          return;
        }
        // const deleteRes = await SubscriptionControllerRemove({
        //   appid: app.appid,
        // });
        // if (!deleteRes.error) {
        //   set((state) => {
        //     if (state.currentApp) {
        //       state.currentApp.phase = APP_PHASE_STATUS.Deleting;
        //     }
        //   });
        // }
      },

      setCurrentApp: (app) => {
        localStorage.setItem("app", app?.appid || "");
        set((state) => {
          state.currentApp = app;

          if (typeof state.currentApp === "object") {
            const host = `${state.currentApp?.domain?.domain}${formatPort(state.currentApp.port)}`;
            state.currentApp.host = host;
            state.currentApp.origin = `${state.currentApp?.tls ? "https://" : "http://"}${host}`;
          }
        });
      },

      showSuccess: (text: string | React.ReactNode) => {
        toast({
          position: "top",
          title: text,
          status: "success",
          variant: localStorage.getItem(CHAKRA_UI_COLOR_MODE_KEY) ? "subtle" : "solid",
          duration: 1000,
          containerStyle: {
            maxWidth: "100%",
            minWidth: "100px",
          },
        });
      },

      showError: (text: string | React.ReactNode) => {
        toast({
          position: "top",
          title: text,
          status: "error",
          variant: localStorage.getItem(CHAKRA_UI_COLOR_MODE_KEY) ? "subtle" : "solid",
          duration: 1500,
          containerStyle: {
            maxWidth: "100%",
            minWidth: "100px",
          },
        });
      },

      showInfo: (text: string | React.ReactNode) => {
        toast({
          position: "top",
          title: text,
          variant: localStorage.getItem(CHAKRA_UI_COLOR_MODE_KEY) ? "subtle" : "solid",
          duration: 1000,
          containerStyle: {
            maxWidth: "100%",
            minWidth: "100px",
          },
        });
      },
    })),
  ),
);

export default useGlobalStore;
