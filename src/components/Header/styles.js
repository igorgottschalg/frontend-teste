import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  width: 100%;
  max-width: 143.9rem;
  height: 10rem;
  
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    nav {
      display: flex;
      flex-direction: row;
      height: 100%;
  
      ul {
        display: flex;
        list-style: none;
        
        li{

          a {
            text-decoration: none;
            color: #FFF;
            position: relative;
            padding: 0.5rem 1.5rem 0.5rem 2.0rem;

            :hover::after {
              content: "";
              position: absolute;
              right: 0;
              top: 0;
              background: currentColor;
              width: 0.8rem;
              height: 0.8rem;
              border-radius: 5rem;
              transition: 0.5s;
              animation: fade 0.3s;
            }
          }
        }
      }
    }

    #subscribe {
      margin-left: 3rem;

      input, button {
        height: 4rem;
        border-radius: 5rem;
        border: 0;
        outline: none;
        padding: 0 2.5rem;
        width: 100%;
      }

      input {
        background: #EFEFEF;
        color: #18171D;
        font-size: 1.4rem;
        margin-right: 1.5rem;
        min-width: 14rem;
      }

      button {
        background: #EFEFEF;
        color: #EF2779;
        font-size: 1.6rem;
        font-weight: 500;
        cursor: pointer;
        max-width: 14.1rem;
      }
    }
  }

  // animações
  @keyframes fade {
    from {
      width: 40%;
      height: 0.3rem;
      opacity: 0;
    } to {
      opacity: 1;
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  // responsividade
  @media(max-width: 1010px) {
    nav ul li a {
      padding: 0.8rem !important;
      
      :after {
        right: 50%;
        left: 50%;
        top: 0;
      }
    }
  }

  @media(max-width: 920px) {

    #subscribe {
      margin-left: 1rem !important;

      button,
      input {
        padding: 0 1rem !important;
      }
    }
  }

  @media(max-width: 790px) {
    div {
      display: none;
    }
  }

`;