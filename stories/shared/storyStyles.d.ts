export declare const storyStyles: {
    container: {
        padding: string;
        fontFamily: string;
        lineHeight: string;
        color: string;
        maxWidth: string;
        margin: string;
        border: string;
    };
    pageTitle: {
        fontSize: string;
        fontWeight: string;
        marginBottom: string;
        color: string;
        borderBottom: string;
        paddingBottom: string;
        textAlign: "left";
    };
    gradientHeader: {
        margin: string;
        padding: string;
        background: string;
        border: string;
        borderRadius: string;
        textAlign: "left";
        color: string;
        boxShadow: string;
    };
    gradientHeaderTitle: {
        margin: string;
        padding: string;
        fontWeight: string;
        letterSpacing: string;
        border: string;
        textAlign: "left";
    };
    gradientHeaderSubtitle: {
        fontSize: string;
        margin: string;
        padding: string;
        border: string;
        opacity: number;
        marginLeft: string;
        marginRight: string;
        lineHeight: string;
        textAlign: "left";
    };
    pageDescription: {
        fontSize: string;
        color: string;
        marginBottom: string;
        lineHeight: string;
    };
    card: {
        margin: string;
        padding: string;
        border: string;
        borderRadius: string;
        backgroundColor: string;
        boxShadow: string;
    };
    cardHeader: {
        fontSize: string;
        fontWeight: string;
        marginBottom: string;
        color: string;
        textAlign: "left";
        display: string;
        alignItems: string;
        gap: string;
    };
    formGroup: {
        marginBottom: string;
    };
    label: {
        display: "block";
        marginBottom: string;
        fontWeight: string;
        color: string;
        fontSize: string;
    };
    input: {
        width: string;
        padding: string;
        borderRadius: string;
        border: string;
        fontSize: string;
        transition: string;
        backgroundColor: string;
    };
    textarea: {
        width: string;
        padding: string;
        borderRadius: string;
        border: string;
        fontSize: string;
        resize: "vertical";
        fontFamily: string;
        transition: string;
    };
    select: {
        width: string;
        padding: string;
        borderRadius: string;
        border: string;
        fontSize: string;
        backgroundColor: string;
        transition: string;
    };
    button: {
        padding: string;
        borderRadius: string;
        border: string;
        fontSize: string;
        fontWeight: string;
        cursor: string;
        transition: string;
        display: string;
        alignItems: string;
        gap: string;
    };
    buttonPrimary: {
        backgroundColor: string;
        color: string;
    };
    buttonSecondary: {
        backgroundColor: string;
        color: string;
    };
    buttonDanger: {
        backgroundColor: string;
        color: string;
    };
    buttonSuccess: {
        backgroundColor: string;
        color: string;
    };
    buttonDisabled: {
        backgroundColor: string;
        color: string;
        cursor: string;
    };
    successBox: {
        padding: string;
        backgroundColor: string;
        borderRadius: string;
        color: string;
        border: string;
        marginBottom: string;
    };
    errorBox: {
        padding: string;
        backgroundColor: string;
        borderRadius: string;
        color: string;
        border: string;
        marginBottom: string;
    };
    warningBox: {
        padding: string;
        backgroundColor: string;
        borderRadius: string;
        color: string;
        border: string;
        marginBottom: string;
    };
    infoBox: {
        padding: string;
        backgroundColor: string;
        borderRadius: string;
        color: string;
        border: string;
        marginBottom: string;
    };
    codeBlock: {
        backgroundColor: string;
        padding: string;
        borderRadius: string;
        fontFamily: string;
        fontSize: string;
        overflowX: "auto";
        border: string;
        lineHeight: string;
    };
    logsContainer: {
        backgroundColor: string;
        padding: string;
        borderRadius: string;
        maxHeight: string;
        overflowY: "auto";
        fontFamily: string;
        fontSize: string;
        border: string;
        lineHeight: string;
    };
    listItem: {
        padding: string;
        margin: string;
        borderRadius: string;
        fontSize: string;
        border: string;
    };
    listItemSuccess: {
        backgroundColor: string;
        borderColor: string;
    };
    listItemError: {
        backgroundColor: string;
        borderColor: string;
    };
    flexBetween: {
        display: string;
        justifyContent: string;
        alignItems: string;
    };
    flexCenter: {
        display: string;
        alignItems: string;
        gap: string;
    };
    textMuted: {
        color: string;
    };
    textBold: {
        fontWeight: string;
    };
    mb16: {
        marginBottom: string;
    };
    mb24: {
        marginBottom: string;
    };
    mt16: {
        marginTop: string;
    };
};
export declare const combineStyles: (...styles: Array<Record<string, unknown>>) => Record<string, unknown>;
export declare const getButtonStyle: (variant: "primary" | "secondary" | "danger" | "success", disabled?: boolean) => Record<string, unknown>;
