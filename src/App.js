import Sidebox from './Components/Sidebox'
import Rightbox from './Components/Rightbox'
import './assets/styles.css'

function App() {
  return (
    <section class="mainwrapper">
      <div class="container-fluid">
        <div class="row flexcontainer">
          <Sidebox />
          <Rightbox />
        </div>
      </div>
    </section>
  );
}

export default App;
