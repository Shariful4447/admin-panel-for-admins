import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import EmailIcon from "@mui/icons-material/Email";


const Pie = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="30px 20px 0 20px"
      sx={{
        transform: isNonMobile ? "scale(1, 0.85)" : "scale(1, 0.9)",
      }}
    >
      <Header title="Task Operation" subtitle="" />

      {/* GRID & CHART */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
{/* ROW 1 box-key section */}
        <Box
          gridColumn={isNonMobile ? "span 3" : "span 12"}
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="12,361"
            subtitle="Start The Process"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isNonMobile ? "span 3" : "span 12"}
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="431,225"
            subtitle="Get The Result"
            progress="0.5"
            increase="+21%"
            icon={
              <RotateLeftIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isNonMobile ? "span 3" : "span 12"}
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="32,441"
            subtitle="Send The Result To Experts for verification"
            progress="0.30 "
            increase="+5%"
            icon={
              <AccessTimeIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={isNonMobile ? "span 3" : "span 12"}
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="32,441"
            subtitle="Generate Certificate"
            progress="0.30 "
            increase="+5%"
            icon={
              <AccessTimeIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
      </Box>
    </Box>

    
  );
};

export default Pie;
