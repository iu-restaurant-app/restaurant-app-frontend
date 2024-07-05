export default function ByteArrayToImage(byteArray: string) : string {
    return "data:image/png;base64," + byteArray;
}