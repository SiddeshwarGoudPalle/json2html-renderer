export default function json2html(data) {
    // Get all unique keys from data array to form table headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    // Start building the HTML string
    let html = `<table data-user="siddeshwar369@gmail.com">`;

    // Add table headers
    html += `<thead><tr>`;
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += `</tr></thead>`;

    // Add table rows
    html += `<tbody>`;
    data.forEach(row => {
        html += `<tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += `</tr>`;
    });
    html += `</tbody></table>`;

    return html;
}
