import React from 'react'
import DashHeader from './DashHeader'
import empresa_bg_br from '../svg/empresa_bg_br.svg'

const MainDash = () => {
  return (
    <>
        <div className='Box-main border'>
            <DashHeader/>
           <div className='flex mt-2'>
                <h1 className='ml-3 titulo_dash'>
                    VISÃO <br/> GERAL
                </h1>
                <div className='boxs'>
                    <div className=' broke-line mr-2'>
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
            
        </div>
    </>
  )
}

export default MainDash