const core = require('@actions/core')
const { inputsToRegistryDocument } = require('./lib/input-to-registry-document.cjs')

// Mock do core para simular inputs
const mockCore = {
  getInput: (name) => {
    const inputs = {
      'schema-version': 'v2.2',
      'service-name': 'test-service',
      'ci-pipeline-fingerprints': '["fingerprint1", "fingerprint2"]'
    }
    return inputs[name] || ''
  }
}

// Teste simples
console.log('Testing ci-pipeline-fingerprints...')
const result = inputsToRegistryDocument(mockCore)
console.log('Result:', JSON.stringify(result, null, 2)) 