import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

const CalcTabs = () => {
  return (
    <>
      <Center marginTop="2%" borderBottom="solid 1px">
        <Breadcrumb fontSize="19px">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="../calculation/scorecal">
              得点計算
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="../calculation/scoregraph">
              点数表
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="../calculation/detailscore">
              符計算
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    </>
  );
};

export default CalcTabs;
