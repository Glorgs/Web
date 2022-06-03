import styled from "styled-components";

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background: #fff;
  background: ${props => props.colorAlt ?
          'linear-gradient(270deg, #60a5fa 0%, #2e3761 100%)' :
          'linear-gradient(270deg, #60a5fa 0%, #2e3761 100%)'};
  margin: ${props => props.divider ? "4rem 0 3rem 0" : ""};
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${props => props.main ? '65px' : '56px'};
  line-height: ${props => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: ${props => props.main ? '2rem' : '2rem'};
    line-height: ${props => props.main ? '40px' : '30px'};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.width ? props.width : 350}px, 1fr));
  justify-content: center;
  gap: 2rem;
  padding: ${props => props.noPadding ? 0 : '0 3rem'};
`

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 3px;
  transition: 150ms ease;
  overflow: hidden;

  @media (min-width: 768px) {
    &:hover {
      box-shadow: 3px 3px 20px rgba(104, 101, 101, 0.5);

      img {
        transform: scale(1.03);
      }

      h3{
        text-decoration: underline;   
      }
    }
  }

  img {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    transition: transform 300ms ease;
  }
`

export const ProjectTitle = styled.h3`
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
  color: #cbcdce;
  padding: .5rem .8rem 0 .8rem;
  font-size: 2rem;
  z-index: 0;
  background: #090b0c;
`

export const ProjectDescription = styled.p`
  width: 100%;
  padding: .8rem 1.5rem 1.5rem 1.5rem;
  color: #e4e6e7;
  line-height: 24px;
  text-align: justify;
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 1px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 30px;
  }
`
