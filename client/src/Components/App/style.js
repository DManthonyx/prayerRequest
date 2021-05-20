import styled from 'styled-components';

export const Wrapper = styled.div`
  background: url('https://i.imgur.com/zD7uTjm.jpg');
  background-size: 100% 100%;
  height: 100%;
  min-height: 100%;
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 0;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.00;
    transition: opacity 500ms ease-in;
  }

  div.transition-group {
    height: 100%;
  }

  section.route-section {
    // overflow-x: hidden;
    height: 100%;
  }
`

export const Section = styled.section`

`