export interface headerConfigProps{
    linksSocial: string[],
    socialIcon:{
        color: string,
        background: string
    },
    headerAnimatedConfig:{
        leftTimer: number,
        rigthTimer: number,
    }
}

const headerConfig: headerConfigProps = {
    linksSocial: [
        "https://linkedin.com/in/caiofrsouza",
        "https://api.whatsapp.com/send?phone=5511983824485&text=Ol%C3%A1%2C%20vi%20o%20seu%20portifolio%20e%20gostaria%20de%20entrar%20em%20contato"
    ],
    socialIcon: {
        color:"gray",
        background:"transparent",
    },
    headerAnimatedConfig: {
        leftTimer: 1.2,
        rigthTimer: 1.2,
    }
}

export default headerConfig;