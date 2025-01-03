import "./page.css"
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconMail,
  IconBrandGithub
} from "@tabler/icons-react";
import {Menu} from "@/components/Menu";

export default function App() {
  return (
      <div>
        {Menu()}
        <div className="mainpage">
          <div className="card">
            <h1>Jakush</h1>
            <div className="box">
              <p>Ahoj, jsem vášnivý vývojář, pracuji s každou technologií, která se nějak hodí a přijde mi zrovna pod ruce.</p>
              <h4>Pro kontakt můžeš využít jakýkoliv způsob níže ;)</h4>
            </div>
            <a className="contact mail" href="mailto:contact@jakush.xyz" target="_blank">
              <div className="wrapper">
                <IconMail />
                <p className="link">contact@jakush.xyz</p>
              </div>
            </a>
            <a className="contact instagram" href="https://www.instagram.com/jakush.dev/" target="_blank">
              <div className="wrapper">
                <IconBrandInstagram />
                <p className="link">@jakush.dev</p>
              </div>
            </a>
            <a className="contact discord" href="https://discord.com/users/742790698407034971" target="_blank">
              <div className="wrapper">
                <IconBrandDiscord />
                <p className="link">jakush.dev</p>
              </div>
            </a>
            <a className="contact github" href="https://github.com/Jakush" target="_blank">
              <div className="wrapper">
                <IconBrandGithub />
                <p className="link">Jakush</p>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}
