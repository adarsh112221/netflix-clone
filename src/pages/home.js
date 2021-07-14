import React from 'react'
import { FaqsContainer} from "../containers/faqs";
import { OptForm,Feature} from "../components";
import FooterContainer from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import HeaderContainer from "../containers/header"
export default function Home()
{
    return(
    <>
    <HeaderContainer>
        <Feature>
            <Feature.Title>
                Unlimited films, TV shows and more.
            </Feature.Title>
            <Feature.SubTitle>
                Watch anywhere . cancle at any time.
            </Feature.SubTitle>
            <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      </OptForm>
        </Feature>
        
    </HeaderContainer>
    <JumbotronContainer/>
    <FaqsContainer/>
    <FooterContainer/>
    
    </>)
}
