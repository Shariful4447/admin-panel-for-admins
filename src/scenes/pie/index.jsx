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
            title="Start The Process"
            progress="0.75"
            
            
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
            title="Get The Result"
            progress="0.5"
            
            
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
            title="Experts Verification"
            progress="0.30 "
            
            
            
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
            title="Generate Certificate"
            progress="0.30 "
            
            
          />
        </Box>
      </Box>
    </Box>

    
  );
};

export default Pie;
