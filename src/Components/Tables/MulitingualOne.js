import React from 'react';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
import '../../Styles/MultilingualOne.css';

export const MultilingualOne = () => {
    return (
        <div className='glossaries-one'>
            <table className='one-table'>
                <section className='column topic home-language one'>
                    <div className='header-row multi topic-header oneTable'>
                        <h4 className='header-text topic-header-text home-text'>
                            Multilingual Glossaries
                        </h4>
                    </div>
                </section>
                <section className='column topic multi one'>
                    <div className='info-row icons gloss v1'>
                        <a href='https://www.hmhco.com/content/literature/into_lit/g9/student/pdf/09le_03_multilingualgloss_ell.pdf'>
                            <img
                                className='icon-input glossary'
                                alt='Critical Vocabulary PDF'
                                src={PDFIcon}
                            />
                        </a>
                    </div>
                </section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
                <section className='column topic note-charts-unit small invisible'></section>
            </table>
        </div>
    );
};

export default MultilingualOne;
