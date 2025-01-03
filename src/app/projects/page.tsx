import "./page.css"
import {IconBomb} from "@tabler/icons-react";
import {ProjectCard} from "@/components/ProjectCard";
import {Menu} from "@/components/Menu";

function App() {
    return (
        <div>
            {Menu()}
            <div className="projectspage">
                <div className="category mb-20">
                    <h1 className="title mt-12">
                        <IconBomb size="32"/>
                        <p>Projects</p>
                    </h1>
                    <ProjectCard
                        projectName="Survival-Games.cz"
                        timeFrame="2023-2024"
                        description="Minecraft projekt založený kolem roku 2013, který má za sebou dost pestrou historii, jsem nastoupil v období listopad 24.-27. na pozici Developera
                                s cílem něco dokázat a zároveň se i něco naučit. Na Survival-Games jsem převážně vytvářel updaty dle toho, jak bylo potřeba (dle vedení).
                                Prvním mým updatem byl SkyWars update (v1), který měl za cíl hru nějak oživit, zlepšit/vylepšit, vzhledem k tomu, že v té době nebyla úplně
                                populární minihrou. K životu jsem tedy přivedl první update, který se zaměřil na přidání funkcionalit, vylepšení designu
                                a trošku i zoriginálnění. V tomto updatu bylo tedy zahrnuto: kity (Handyman, Robin Hood, Warrior, Turtle, Quick Foot, Healer, Toxic Pick,
                                Viking, Rusher a Snowman), nové měny shardy a skully, předělaný loot v chestkách, ability (Dwarf Grind, Fire Shot, Heavy Shot, Gambler's Luck,
                                Robber's Grace, Blessing From Legolas, Smelter, Winner, Never mind!, Never alone, Ratcatcher a Berserker) a upgrady (Fireman,
                                Blacksmith, Boomerang, Afterblood, Enderman, Metal Skin, Adrenalin Rush, Tank, Ludo, Athlete, Tenacity).
                                Později na stejnou minihru přišel další update ode mě, který se zaměřil na to, vybalancovat některé změny a opravy
                                bugů, na které se nepřišlo během delšího testování minihry. Po minihře SkyWars, jsem začal pracovat na minihře UHCRun,
                                přesněji mód Assassins, který mi byl přidělen. Na minihru tedy zavítal nový limitovaný mód, který byl kratší a rychlejší,
                                ve zkratce šlo o mód, kde každý hráč dostane na někoho target (bounty) a zároveň bude hráč, který bude mít na tohoto hráče taky bounty.
                                Hráč tedy nemůže zabít nikoho jiného než hráče, na kterého má bounty, nebo pro kterého je bounty. Na serveru jsem přestal působit kolem
                                poloviny srpna, jelikož jsem nesouhlasil s kroky, které vedení dělalo. Ovšem dalo mi to další zkušenosti, které se hodili a za to jsem vděčný."
                    />
                    <ProjectCard
                        projectName="Rajce.pro"
                        timeFrame="2022-2023"
                        description="Minecraft projekt založený v září roku 2022, na který jsem nastoupil cca v období říjen-listopad na pozici Developera,
                                po dobu půl roku. Na serveru jsem udržoval většinu serverů, tedy například Survival, Lobby, na který
                                jsem pak přidával požadované funkce. Například na Survivalu, se nacházel plugin, vytvořený pro moderaci serveru,
                                plugin se jmenoval „Ketchup Moderation“, který se i mimo jiné nacházel na Lobby a Anarchy. Plugin obsahoval funkce jako
                                přenosná Anvil, CraftingTable, EnderChest, blokování příkazů, /discord, příkaz na ovládání létaní a rychlosti létání,
                                gamemode zkratky, /invsee, /heal, /hat, dále teleportační příkazy, /seen, /sudo, funkci vanish i s dalším příkazem pro nastavení
                                různých podrobností jako je pokládání, ničení bloků s povoleným vanishem (dále i otevírání chestek a hitování entit). Mimo tyto funkce
                                i měnil zprávy připojení a odpojení. Další z pluginů, které jsem vytvořil byl i adventní kalendář („KetchupCalendar“),
                                pak i plugin „KetchupClans“, který dodával funkce clanů na server Anarchy. Mimo jiné, jsem pracoval na vícero pluginech, u kterých
                                už si tak jistý nejsem, zda byly přidány na server, jako je třeba vlastní TAB plugin. Celkově jsem u sebe dohledal 16 projektů,
                                které s jistotou byly určeny pro server, většina z nich se však na server nikdy nepodívala. Jedním větším projektem, který se na server
                                nepodíval je například vlastní BedWars plugin, s odstupem času však mohu říci, že je dobře, že se na server tento plugin nedostal,
                                vzhledem k většímu počtu bugů a nežádaného chování. Moje působení na tomto serveru započalo ve 13 letech, s tím, že jsem byl po
                                půl roce vyhozen, jelikož z mé strany došlo mnoho chyb, které jsem si v té době bohužel neuvědomoval, například problémy jako
                                držet tajemství (přestože, jednou to bylo řečeno mně blízkému člověku, který to však neudržel), špatná komunikace. Ovšem
                                s odstupem času si, ale pořád nemyslím, že by byla chyba jen na mé straně, jelikož u některých členů docházelo k nevhodnému
                                chování vůči mně. Overall však beru tento projekt jako velmi pozitivní zkušenost, při které jsem se naučil mnoho,
                                ať už po lepší pracování s databázemi, tak i lepší psaní kódu. Flukymu (bývalému majiteli, který mně nabídl tuto pozici)
                                bych tímto chtěl ještě jednou poděkovat za vše."
                    />
                    <ProjectCard
                        projectName="BestRun.cz"
                        timeFrame="2020"
                        description="Minecraft projekt založený mnou v (pravděpodobně) únoru roku 2020, šlo o pokus vytvoření skvělého Minecraft serveru, avšak neúspěšně,
                                kvůli malé hratelnosti, i kvůli nedostatku zkušeností z mé strany, kdy šlo pouze o stažení a nastavení pár pluginů. Datumy nemusí sedět."
                    />
                    <ProjectCard
                        projectName="DiskotekaStar"
                        timeFrame="2019"
                        description="Můj první Minecraft projekt, na kterém jsem působil, zároveň i jako spolumajitel, moc dlouho nevydržel,
                                ale uvedl mě do světa Minecraft projektů, co se týče menší orientace okolo pluginů."
                    />
                </div>
                {/*
                <div className="category">
                    <h1 className="title spacexl">
                        <IconPigMoney size="32"/>
                        <p>Commissions</p>
                    </h1>
                    <div className="commission">
                        <p className="title">Example Project</p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc
                            auctor.
                            Nullam
                            faucibus mi quis velit. Fusce consectetuer risus a nunc. Cum sociis natoque penatibus et
                            magnis
                            dis
                            parturient montes, nascetur ridiculus mus. Nulla est. Vivamus ac leo pretium faucibus. Etiam
                            quis
                            quam. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Aliquam
                            erat
                            volutpat.
                        </p>
                        <div className="reviewbox">
                            <p className="author">Example Author</p>
                            <p className="review">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
                                Aenean id metus id velit ullamcorper pulvinar.
                                Nullam faucibus mi quis velit.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                repellendus.
                            </p>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </div>
    );
}

export default App;