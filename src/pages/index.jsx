import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Contact} from '../components/Contact'
import { Gallery } from '../components/Gallery'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'

document.querySelector('#root').innerHTML = render(
  <>
  <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <section>
        <Contact />
      </section>
    </main>
    <Footer />
  </>
);

const navButtonElement = document.querySelector(".nav-btn")
const rolloutNavElement = document.querySelector(".rollout-nav")

navButtonElement.addEventListener("click", () => {
  rolloutNavElement.classList.toggle("nav-closed")
})

rolloutNavElement.addEventListener("click", () => {
  rolloutNavElement.classList.add("nav-closed")
})
