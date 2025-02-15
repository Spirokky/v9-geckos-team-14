import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import HomePalettes from "../HomePalettes/HomePalettes";
const styles = {
  root: {
    background: "linear-gradient(to right, #007991, #78ffd6)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "85%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "#fff"
  },
  colorPalettes: {
    boxSizing: "border-box",

    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",
    gridGap: "1.5%"
  }
};
class DisplayListPalette extends Component {
  displayAllColors = id => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { listPalettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Navbar</h1>
          </nav>
          <div className={classes.colorPalettes}>
            {listPalettes.map(palette => (
              <HomePalettes
                {...palette}
                clickHandler={() => this.displayAllColors(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(DisplayListPalette);
