import styled from 'styled-components';

export const StyledApp = styled.div`
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
}

.directory-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}

.menu-item {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  height: 240px;
  margin: 0 7.5px 15px;

  background-position: center;
  background-size: 100%;
  border: 1px solid black;
  cursor: pointer;

  transition: 3s;

  &:hover {
    background-size: 120%;

    transition: 3s;
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    padding: 0 25px;

    text-transform: uppercase;

    background-color: rgba(255,255,255,0.3);
    border: 1px solid black;

    backdrop-filter: blur(5px);
    .title {
      margin-bottom: 6px;

      font-weight: bold;
      font-size: 22px;
      color: #000000;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
}

.large {
  height: 480px;
}

`;
