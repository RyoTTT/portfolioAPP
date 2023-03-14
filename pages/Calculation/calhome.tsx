import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Box
} from "@chakra-ui/react";
import Labels from "../../components/Labels";
import Link from "next/link";

const CalculationHome = () => {
  return (
    <>
      <Labels />
      <Center margin="30px">
        <Breadcrumb>
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

export default CalculationHome;
