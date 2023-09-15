import bcrypt from 'bcrypt'


const hashedPassword = async (password) => {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword)
    return hashedPassword;
};

export default hashedPassword