import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
  } from "@chakra-ui/react";
import Link from 'next/link';

const LinkTabs = () => {
  return (
    <Center>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="./handsresult">
          役アガリ歴
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="./seisan">
          精算
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="./totalresult">
          総合対戦履歴
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Center>
  )
}

export default LinkTabs