import React from 'react'
import DashHeader from './DashHeader'
import empresa_bg_br from '../svg/empresa_bg_br.svg'

const MainDash = () => {
  return (
    <>
        <div className='Box-main border'>
            <DashHeader/>
           <div className='flex'>
                <h1 className='ml-3'>
                    VISÃO <br/> GERAL
                </h1>
                <div className=' broke-line'>
                        <div className='elements flex-center mx-1 mb-2'>
                            <div className='elemensts_value'>
                                <img className='' src={empresa_bg_br} alt="" />
                                <p>7 empresas associados</p>
                            </div>
                        </div>
                        <div className='elements flex-center mx-1 mb-2'>
                            <div className='elemensts_value'>
                                <img className='' src={empresa_bg_br} alt="" />
                                <p>7 empresas associados</p>
                            </div>
                        </div>
                        <div className='elements flex-center mx-1 mb-2'>
                            <div className='elemensts_value'>
                                <img className='' src={empresa_bg_br} alt="" />
                                <p>7 empresas associados</p>
                            </div>
                        </div>
                        <div className='elements flex-center mx-1 mb-2'>
                            <div className='elemensts_value'>
                                <img className='' src={empresa_bg_br} alt="" />
                                <p>7 empresas associados</p>
                            </div>
                        </div>
                        <div className='elements flex-center mx-1 mb-2'>
                            <div className='elemensts_value'>
                                <img className='' src={empresa_bg_br} alt="" />
                                <p>7 empresas associados</p>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default MainDash