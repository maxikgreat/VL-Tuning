
export default function importSrcLogos(){
    const files = require.context('../assets/images/logos', false,  /\.(png|jpe?g|svg)$/);
    return files.keys().map(files)
}