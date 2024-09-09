import Swal from "sweetalert2";

export const ejecutarAlerta = ({ icon, title, text, showConfirmButton, timer, confirmButtonText }) => {
    Swal.fire({
        icon,
        title,
        text,
        showConfirmButton,
        timer,
        confirmButtonText,
    });
};