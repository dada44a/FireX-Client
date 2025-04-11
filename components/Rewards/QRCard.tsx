/* eslint-disable @next/next/no-img-element */
export default function QRCard() {
  return (
    <div className="card card-border bg-base-200">
      <div className="card-body">
        <h2 className="card-title">Membership QR Code</h2>
        <p className="mb-2 text-gray-400">Scan this code at the cinema to earn and redeem rewards</p>
        <div className="w-full flex justify-center">
        <img src="https://www.drupal.org/files/project-images/qrcode-module_0.png" alt="qr" className="w-[250px] h-[250px]"/>
        </div>
      </div>
    </div>
  );
}
