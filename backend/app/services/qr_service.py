import qrcode
from io import BytesIO
from PIL import Image

def generate_qr(data: str, color="black"):
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color=color, back_color="white")
    buf = BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()
