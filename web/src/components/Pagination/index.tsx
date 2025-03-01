import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, HStack, Select, Text } from "@chakra-ui/react";
import { t } from "i18next";

import IconWrap from "../IconWrap";

export type PageValues = {
  page?: number;
  pageSize?: number;
  limit?: number;
  total?: number;
};

export default function Pagination(props: {
  values: PageValues;
  options?: number[];
  onChange: (values: PageValues) => void;
}) {
  const { values, onChange, options } = props;
  const { page, total, pageSize } = values;
  const maxPage = total && pageSize ? Math.ceil(total / pageSize) : -1;

  if (maxPage > 0 && page && page > maxPage) {
    onChange({
      ...values,
      page: maxPage,
    });
  } else if (page && page < 1) {
    onChange({
      ...values,
      page: 1,
    });
  }

  return (
    <HStack
      alignItems="center"
      spacing={"1"}
      display="flex"
      whiteSpace={"nowrap"}
      justifyContent={"space-between"}
    >
      <HStack spacing={"1"}>
        <Text as="div" className="mr-2">
          {t("Total")}: {total}
        </Text>
        <IconWrap showBg tooltip="First Page" size={18}>
          <Button
            variant="link"
            onClick={() => {
              onChange({
                ...values,
                page: 1,
              });
            }}
            isDisabled={page === 1 || maxPage === -1}
          >
            <ArrowLeftIcon fontSize={"8px"} />
          </Button>
        </IconWrap>
        <IconWrap showBg tooltip="Previous Page" size={18}>
          <Button
            variant="link"
            onClick={() =>
              onChange({
                ...values,
                page: page! - 1,
              })
            }
            isDisabled={page === 1 || maxPage === -1}
          >
            <ChevronLeftIcon fontSize={"16px"} />
          </Button>
        </IconWrap>
        <Text fontWeight="bold" as="p" minWidth={"36px"} px="8px" textAlign={"center"}>
          {page}
        </Text>
        <Text>/</Text>
        <Text fontWeight="bold" as="p" minWidth={"36px"} px="8px" textAlign={"center"}>
          {maxPage < 0 ? "-" : maxPage}
        </Text>
        <IconWrap showBg tooltip="Next Page" size={18}>
          <Button
            variant="link"
            isDisabled={maxPage === page || maxPage === -1}
            onClick={() => {
              onChange({
                ...values,
                page: page! + 1,
              });
            }}
          >
            <ChevronRightIcon fontSize={"16px"} />
          </Button>
        </IconWrap>
        <IconWrap showBg tooltip="Last Page" size={18}>
          <Button
            variant="link"
            onClick={() => {
              onChange({
                ...values,
                page: maxPage,
              });
            }}
            isDisabled={maxPage === page || maxPage === -1}
          >
            <ArrowRightIcon fontSize={"8px"} />
          </Button>
        </IconWrap>
      </HStack>
      <Select
        size="sm"
        w="120px"
        value={pageSize}
        onChange={(e: any) => {
          onChange({
            ...values,
            pageSize: parseInt(e.target.value),
            page: 1,
          });
        }}
      >
        {(options || [10, 20, 30]).map((data: any) => (
          <option key={data} value={data}>
            {data} / {t("Page")}
          </option>
        ))}
      </Select>
    </HStack>
  );
}
