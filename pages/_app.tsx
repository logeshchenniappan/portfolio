// global styles shared across the entire site
import 'styles/global.css'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'

// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'

// global style overrides for notion
import 'styles/notion.css'

// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

import * as React from 'react'
import * as Fathom from 'fathom-client'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import posthog from 'posthog-js'

import { bootstrap } from 'lib/bootstrap-client'
import {
  isServer,
  fathomId,
  fathomConfig,
  posthogId,
  posthogConfig
} from 'lib/config'

if (!isServer) {
  bootstrap()
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  React.useEffect(() => {
    function onRouteChangeComplete() {
      if (fathomId) {
        Fathom.trackPageview()
      }

      if (posthogId) {
        posthog.capture('$pageview')
      }
    }

    if (fathomId) {
      Fathom.load(fathomId, fathomConfig)
    }

    if (posthogId) {
      posthog.init(posthogId, posthogConfig)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  // ✅ Add chatbot script dynamically
  React.useEffect(() => {
    // Load chatbot CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
    document.head.appendChild(link)

    // Load chatbot script (ES module)
    const script = document.createElement('script')
    script.type = 'module'
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl:'https://n8n-4a2p.onrender.com/webhook/18f7b66d-e4f4-40f8-bb1f-6a5688b67194/chat'
        webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		'Hi there! 👋',
		'My name is Nathan. How can I assist you today?'
	],
	i18n: {
		en: {
			title: 'Hi there! 👋',
			subtitle: "Start a chat. We're here to help you 24/7.",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
		},
	},
      });
    `
    document.body.appendChild(script)
  }, [])

  return <Component {...pageProps} />
}

