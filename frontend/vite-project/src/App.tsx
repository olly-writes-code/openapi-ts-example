import { useState } from 'react'
import './App.css'
import { rootGet } from './services/api/sdk.gen'
import { SuccessResponse } from './services/api/types.gen'

function App() {
  const [apiResponse, setApiResponse] = useState<string>('')

  const handleApiCall = async () => {
    try {
      const response = await rootGet()
      const successData = response.data as unknown as SuccessResponse
      setApiResponse(JSON.stringify(successData?.message, null, 2))
    } catch (error) {
      setApiResponse('Error: ' + (error instanceof Error ? error.message : String(error)))
    }
  }

  return (
    <>
      <div className="card">
        <button onClick={handleApiCall} style={{ marginLeft: '10px' }}>
          Call API
        </button>
        {apiResponse && (
          <pre style={{ marginTop: '20px', textAlign: 'left' }}>
            {apiResponse}
          </pre>
        )}
      </div>
    </>
  )
}

export default App
