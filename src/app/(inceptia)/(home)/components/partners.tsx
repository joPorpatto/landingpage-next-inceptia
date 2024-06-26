import React, { FC } from "react";
import Box from "@mui/material/Box";
import Slider, { Settings } from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { data } from "../../../../data/partners.data";
import PartnerCardItem from "../../../../components/cards/partnerCardItem";

interface SliderArrowArrow {
  onClick?: () => void;
  type: "next" | "prev";
  className?: "string";
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  // return <></>;
  return (
    <IconButton
      sx={{
        position: "absolute",
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: "-28px !important",
        left: "unset !important",
        right: type === "prev" ? "60px !important" : "0 !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};

const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: "left",
    "& li": {
      marginRight: theme.spacing(2),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const Partners = () => {
  const { breakpoints } = useTheme();
  const matchTabletView = useMediaQuery(breakpoints.between("sm", "md"));
  const matchSmallView = useMediaQuery(breakpoints.down("sm"));
  const theme = useTheme();

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: matchSmallView ? 1 : matchTabletView ? 2 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 8,
          width: 30,
          backgroundColor: "divider",
          display: "inline-block",
          borderRadius: 4,
        }}
      />
    ),
  };

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary
            : theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: 32, md: 48 },
            // letterSpacing: 1.5,
            fontWeight: "bold",
            lineHeight: 1.2,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: 2, // Aquí defines el espacio entre el título y el slider
          }}
        >
          Clientes que confían en nosotros
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mb: 2,
            px: { md: 16 }, // Aplica padding solo en pantallas medianas y más grandes
            // width: "80%",
          }}
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to..."
          }
        </Typography>

        <Slider {...sliderConfig}>
          {data.map((item: any) => (
            <PartnerCardItem key={String(item.id)} item={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Partners;
