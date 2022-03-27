import {Container} from './components/styled/Container.styled'
import Header from './components/Header';
import Card from './components/Card';
import BottomCard from './components/BottomCard';
import Footer from './components/Footer';
import {ThemeProvider} from "styled-components"
import GlobalStyles from './components/styled/Global';
import content from './content'

const theme = {
  colors: {
    header: "hsl(193, 100%, 96%)",
    body: "white",
    footer: "#003333",
  },

  mobile: '768px',
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      
          <BottomCard />
        
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
