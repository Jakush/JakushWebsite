type CommissionProps = {
    projectTitle: string;
    projectDescription: string;
    commissionAuthor: string;
    commissionReview: string;
}

export function Commission({projectTitle, projectDescription, commissionAuthor, commissionReview}: CommissionProps) {
    return (
        <div className="commission">
            <p className="title">{projectTitle}</p>
            <p className="description">{projectDescription}</p>
            <div className="reviewbox">
                <p className="author">{commissionAuthor}</p>
                <p className="review">{commissionReview}</p>
            </div>
        </div>
    );
}