import React, { useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Center
} from '@chakra-ui/react'
import Labels from './components/Labels';
import Link from "next/link";


const CalculationHome = () => {
  return (
    <>
    <Labels />
    <Center margin="30px">
    <Breadcrumb>
    
    <BreadcrumbItem>
    <BreadcrumbLink as={Link} href="../Calculation/ScoreCal">得点計算</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
    <BreadcrumbLink as={Link} href="../Calculation/ScoreGraph">点数表</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
    <BreadcrumbLink as={Link} href="../Calculation/DetailScore">符計算</BreadcrumbLink>
    </BreadcrumbItem>

    </Breadcrumb>
    </Center>

    </>
  )
}

export default CalculationHome