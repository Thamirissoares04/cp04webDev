import './Home.css';

import { Card } from '../../components/Card';
import Inicio from '../../components/Inicio';

import HomeImg from '../../assets/homeImg.png';

function Home() {
    return (
        <main>
            <Inicio titulo='Crie seus vídeos online' texto='Transforme suas ideias em 
            filmes memoráveis: onde a criatividade encontra a simplicidade.'
                SobreImg={HomeImg} />
            <section className='cards'>
                <Card
                    corFundo="#F1C2B1"
                    numero="1"
                    titulo="Youtube"
                    descricao="Produza conteúdo cativante e conquiste seu 
                    público com vídeos de alta qualidade no maior palco digital do mundo."
                />
                <Card
                    corFundo="#F9EB92"
                    numero="2"
                    titulo="TikTok"
                    descricao="Faça sua criatividade brilhar em vídeos curtos 
                    e envolventes que vão cativar a comunidade global do TikTok."
                />
                <Card
                    corFundo="#C0D3DD"
                    numero="3"
                    titulo="Facebook"
                    descricao="Conecte-se com sua audiência de forma autêntica 
                    e impactante através de vídeos que se destacam no feed do Facebook."
                />
                <Card
                    corFundo="#6975E4"
                    numero="4"
                    titulo="Instagram"
                    descricao="Compartilhe suas histórias de maneira única 
                    e conquiste milhões de likes no Instagram utilizando Stories e Reels."
                />
            </section>
        </main>
    )
}

export default Home