import React from 'react'
import {Box} from "@chakra-ui/react"

type tsumoScoreType = {
    name: string;
    score: number;
}
type Props = {
    score: number;
    oyaTsumoScore: number;
    tsumoScore: tsumoScoreType[];
    oyaCheck: boolean;
    tsumoCheck: boolean;
}

const ScorePreview = (props:Props) => {
    const {score,oyaTsumoScore,tsumoScore,oyaCheck,tsumoCheck} = props;
    if (oyaCheck === true && tsumoCheck === true) {
      return (
        <Box>{score}点（{oyaTsumoScore}オール）</Box>
      )
    } else if (oyaCheck === true && tsumoCheck === false) {
      return (
        <Box>{score}点</Box>
      )
    } else if (oyaCheck === false && tsumoCheck === true) {
      return (
        <Box>{tsumoScore.map((tumo) => (
          <Box key={tumo.name}>{tumo.name}:{tumo.score}点</Box>
        ))}
        </Box>
      )
    } else if (oyaCheck === false && tsumoCheck === false) {
      return (
        <Box>{score}点</Box>
      )
    }
    return (
      <Box>エラー</Box>
    )
  }

export default ScorePreview;