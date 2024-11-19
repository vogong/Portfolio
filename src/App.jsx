import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import SEO from './components/SEO'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const App = () => {
  
  useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n.apps.kwika.ca/webhook/26341bba-5b6a-4f66-ba22-d12ca18dc54e/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Welcome!',
        "My name is Vogon , Vaughn's assistant. How can I help you today?"
      ],
      i18n: {
        en: {
          title: 'Hello!',
          subtitle: "Please feel free to use my assistant to ask any questions you may have.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
        },
      },
		});
	}, []);

  return (
    <AppContainer>
      <div></div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
`

export default App
