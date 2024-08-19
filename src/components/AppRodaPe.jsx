import React from 'react'
import { CFooter } from '@coreui/react'

const AppRodaPe = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; Equoterapia IF Goiano Urutaí.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">V1.0</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppRodaPe)
