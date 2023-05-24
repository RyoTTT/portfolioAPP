import React from "react";
import { Box } from "@chakra-ui/react";

type tsumoScoreType = {
  name: string;
  score: number;
};
type Props = {
  score: number;
  oyaTsumoScore: number;
  tsumoScore: tsumoScoreType[];
  oyaCheck: boolean;
  tsumoCheck: boolean;
  honbaCount: number;
};

const ScorePreview = (props: Props) => {
  const { score, oyaTsumoScore, tsumoScore, oyaCheck, tsumoCheck, honbaCount } =
    props;
  if (oyaCheck === true && tsumoCheck === true) {
    return (
      <Box textAlign="center" fontSize="45px" color="red">
        {score + honbaCount * 300}点（{oyaTsumoScore + +honbaCount * 100}
        オール）
      </Box>
    );
  } else if (oyaCheck === true && tsumoCheck === false) {
    return (
      <Box textAlign="center" fontSize="45px" color="red">
        {score + honbaCount * 300}点
      </Box>
    );
  } else if (oyaCheck === false && tsumoCheck === true) {
    return (
      <Box textAlign="center" fontSize="45px" color="red">
        {tsumoScore.map((tumo) => (
          <Box key={tumo.name}>
            {tumo.name}:{tumo.score + honbaCount * 100}点
          </Box>
        ))}
      </Box>
    );
  } else if (oyaCheck === false && tsumoCheck === false) {
    return (
      <Box textAlign="center" fontSize="45px" color="red">
        {score + honbaCount * 300}点
      </Box>
    );
  }
  return <Box>エラー</Box>;
};

export default ScorePreview;
