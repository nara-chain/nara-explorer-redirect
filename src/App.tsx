import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const { pathname, search, hash } = window.location
    const extra = 'cluster=custom&customUrl=https://mainnet-api.nara.build/'
    const target = 'https://solscan.io' + pathname + (search ? search + '&' + extra : '?' + extra) + hash

    window.location.replace(target)
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Redirecting to Solscan...</p>
    </div>
  )
}

export default App
