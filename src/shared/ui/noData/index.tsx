import { Box, CircularProgress } from "@mui/material";
import noData from "@/assets/images/noData.png";
import Image from "next/image";
import { FC } from "react";
import { MiniLoader } from "../loader";

type Props = {
  loading?: boolean;
  show?: boolean;
};

export const NoData: FC<Props> = ({ show = true, loading }) => {
  return (
    <>
      {show ? (
        <Box
          display="flex"
          flexGrow={1}
          minHeight={140}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          {loading ? (
            <MiniLoader />
          ) : (
            <>
              <Image src={noData} alt="" width={200} height={200} />
            </>
          )}
        </Box>
      ) : null}
    </>
  );
};
