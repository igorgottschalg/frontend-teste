import styled, { css } from 'styled-components';

export const Container = styled.div`

  .background {
    width: 100%;
    height: 100vh;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 21;
    background: rgba(0, 0, 0, 0.3);
  }

  .menu-right {
    z-index: 22;

    .burger {
      width: 2.667rem;
      height: 2.667rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      cursor: pointer;

      div+div {
        margin-top: 0.4rem;
      }

      div {
        width: 100%;
        height: 0.2rem;
        background: #FFF;
        transition: 0.3s;

        :nth-child(2) {
          width: 70%;
        }

        :nth-child(3) {
          width: 40%;
        }
      }
    }
  }

  ${ props => props.opened && css`
    .background {
      display: block;
    }

    .menu-right {
      display: flex;
      flex-direction: column;
      position: fixed;
      padding: 2rem;
      width: 100%;
      max-width: 50rem;
      height: 100vh;

      top: 0;
      right: 0;
      background: #252B42;

      .burger {
        align-items: center;
        align-self: flex-end;
        margin-top: 1.6rem;

        div {
          :nth-child(2) {
            width: 0;
            opacity: 0;
          }

          :nth-child(1) {
            transform: rotate(-45deg) translateY(0.9rem);
          }

          :nth-child(3) {
            width: 100%;
            transform: rotate(45deg) translateY(-0.9rem);
          }
        }
      }
    }
  `}

  @media(min-width: 790px) {
    .background,
    .menu-right {
      display: none;
    }
    
  }
  
`;

