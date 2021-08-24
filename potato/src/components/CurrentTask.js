import React from "react";

const CurrentTast = (props) => {

    if (props.children === 'a') {
        return (
            "주차장에서 하적장으로 이동하고 있습니다."
        )
    }
    else if (props.children === 'b') {
        return (
            "하적장에서 창고로 이동하고 있습니다."
        )
    }
    else if (props.children === 'c') {
        return (
            "창고에서 하적장으로 이동하고 있습니다."
        )
    }
    else if (props.children === 'd') {
        return (
            "창고에서 주차장으로 이동하고 있습니다."
        )
    }
    else if (props.children === 'e') {
        return (
            "하적장에서 주차장으로 이동하고 있습니다."
        )
    }
    else if (props.children === 'x') {
        return (
            "짐을 싣는 중입니다."
        )
    }
    else if (props.children === 'y') {
        return (
            "짐을 내리는 중입니다."
        )
    }
    else if (props.children === 'z') {
        return (
            "회차하는 중입니다."
        )
    }

}

export default CurrentTast;