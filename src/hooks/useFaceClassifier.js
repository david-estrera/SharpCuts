import { useState, useRef, useCallback } from 'react'

// Backend API URL - change this to your backend URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export function useFaceClassifier() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const classify = useCallback(async (imageData) => {
    setIsLoading(true)
    setError(null)

    // Log API URL for debugging
    console.log('API_URL:', API_URL)
    console.log('Full classify URL:', `${API_URL}/classify`)

    try {
      console.log('Sending image to backend API for classification...')
      
      // Ensure API_URL has protocol
      const apiUrl = API_URL.startsWith('http') ? API_URL : `https://${API_URL}`
      const fullUrl = `${apiUrl}/classify`
      
      console.log('Calling:', fullUrl)
      
      // Call backend API
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageData
        })
      })

      console.log('Response status:', response.status, response.statusText)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API error response:', errorText)
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const result = await response.json()
      console.log('Classification result:', result)
      
      if (result.error) {
        throw new Error(result.error)
      }

      return {
        faceShape: result.faceShape,
        confidence: result.confidence,
        allResults: result.allResults || [],
        isFallback: result.isFallback || false
      }
    } catch (err) {
      console.error('Classification error:', err)
      console.error('Error details:', {
        message: err.message,
        name: err.name,
        stack: err.stack
      })
      setError(err.message || 'Failed to classify image')
      
      // Check if it's a network error (backend not running)
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || err.name === 'TypeError') {
        setError(`Backend API not available. Check if ${API_URL} is accessible.`)
      }
      
      // Fallback: Return a mock result for demo purposes if API fails
      console.log('Using fallback classification for demo...')
      return getFallbackResult()
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    classify,
    isLoading,
    error
  }
}

// Fallback result for demo purposes when backend API is unavailable
function getFallbackResult() {
  const shapes = ['Oval', 'Round', 'Square', 'Heart', 'Diamond']
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
  const confidence = 75 + Math.floor(Math.random() * 20)
  
  return {
    faceShape: randomShape,
    confidence: confidence,
    allResults: shapes.map(shape => ({
      label: shape,
      score: shape === randomShape ? confidence : Math.floor(Math.random() * 20)
    })),
    isFallback: true
  }
}

export default useFaceClassifier

