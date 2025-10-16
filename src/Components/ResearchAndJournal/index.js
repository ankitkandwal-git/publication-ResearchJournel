import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const researchInfo = [
    {
        id: 1,
        title: 'About the Journal',
        content: (
            <>
                <p>SPACE Journal of Innovative Research and Review is a quarterly journal designed to ensure that peer-reviewed articles in all disciplines are published quickly. The research papers published in the Journal are freely available on the website.</p>
                <p>The editors pre-review each submission before sending it to a blind peer reviewer, if necessary. Before being published, it is assured that the research must be original, neither simultaneously nor previously published elsewhere, and they must pass a critical review process.</p>
                <p>Submissions of Research Papers to the SPACE Journal undergo peer review; after passing through an initial review, the manuscripts are sent to a technical reviewer.</p>
                <h3>Frequency</h3>
                <p>Quarterly [Four (04) issues are published in a year]</p>
                <p>First Issue in April, Second in July, Third in October and Fourth in January of the Calendar Year.</p>
            </>
        )
    },
    {
        id: 2,
        title: 'Aim and Scope',
        content: (
            <>
                <p>SPACE Journal of Innovative Research and Review aims to provide original research and reviews on the most recent advancements in engineering technology, science, and humanities. Original English-language studies that advance knowledge of science, the humanities, engineering, technology, and education are published in this journal.</p>
                <p>Research Papers can be experimental, theoretical, or both. The submission must not have been published before and should not be in the process of being published elsewhere.</p>
                <p>The publication is a peer-reviewed publication that publishes top-notch articles on any topic related to all disciplines and subjects. Only submissions that have not been published (or submitted concurrently), in English language, elsewhere are accepted for consideration by the journal for publication. The Journal is solely published online.</p>
            </>
        )
    },
    {
        id: 3,
        title: 'Call for Papers',
        content: (
            <>
                <p>SPACE Journal of Innovative Research and Review calls for original research papers, review articles, case studies, and academic or scholarly pieces that are expanded versions of previously published papers in academic peer-reviewed international journals, scholarly journals, or conferences.</p>
                <p>Submission is Open Throughout the Year; papers/manuscripts will be published after a complete review.</p>
                <p><strong>Initial Review Acceptance:</strong> Within 10 days after submission.</p>
                <p>Acceptance will be given immediately after review.</p>
                <p>Kindly prepare and submit your Paper / Manuscript as per the “Authors Guidelines” and strictly as per the “format”.</p>
            </>
        )
    },
    {
        id: 4,
        title: 'Current & Previous Issues',
        content: (
            <>
                <h3>Current Issue</h3>
                <p>Volume: 00, Issue: 00 (January – March, 2024)</p>
                <h4>Index</h4>
                <table className="issue-table">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Name of Author(s)</th>
                            <th>Affiliation</th>
                            <th>Title of Paper</th>
                            <th>Discipline / Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
];

const ResearchAndJournal = () => {
    const [selectedItem, setSelectedItem] = useState(researchInfo[0]);

    return (
        <div className="research-journal-page">
            <nav className="research-journal-nav">
                <h1 className="research-journal-nav-logo">Research and Journal</h1>
                <ul className="research-journal-nav-links">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div className="research-journal-main-content">
                <div className="research-journal-sidebar">
                    <ul>
                        {researchInfo.map(item => (
                            <li 
                                key={item.id} 
                                className={selectedItem.id === item.id ? 'active' : ''}
                                onClick={() => setSelectedItem(item)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="research-journal-content-display">
                    <h2>{selectedItem.title}</h2>
                    <div>{selectedItem.content}</div>
                </div>
            </div>
        </div>
    );
}

export default ResearchAndJournal;
