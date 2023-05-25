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
    <Center marginTop="2%" borderBottom="solid 1px">
    <Breadcrumb fontSize="19px">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/playlist/handsresult">
          役アガリ歴
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/playlist/seisan">
          精算
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/playlist/totalresult">
          総合対戦履歴
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Center>
  )
}

export default LinkTabs