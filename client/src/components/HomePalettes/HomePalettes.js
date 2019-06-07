import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "#f7f2c5",
    border: "2px solid #000",
    borderRadius: "5%",
    padding: "0.5rem",
    overflow: "hidden",
    position: "relative",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "grey",
    height: "170px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
    textTransform: "capitalize"
  },
  miniColorBox: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};

const HomePalettes = props => {
  const { classes, paletteName, colorShades, clickHandler } = props;
  const miniColorBoxes = colorShades.map(color => (
    <div
      className={classes.miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root} onClick={clickHandler}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>{paletteName}</h5>
    </div>
  );
};

export default withStyles(styles)(HomePalettes);
