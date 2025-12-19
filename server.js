import { createServer } from "http";
import { parse } from "url";
import next from "next";
import fs from "fs";
import path from "path";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: path.join(process.cwd(), ".next/standalone") });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);

      // Serve _next static files
      if (parsedUrl.pathname.startsWith("/_next")) {
        const filePath = path.join(
          process.cwd(),
          ".next/standalone/.next",
          parsedUrl.pathname.replace("/_next/", "")
        );
        if (fs.existsSync(filePath)) {
          const stream = fs.createReadStream(filePath);
          res.statusCode = 200;
          // Optional: set content-type for common extensions
          if (filePath.endsWith(".js"))
            res.setHeader("Content-Type", "application/javascript");
          if (filePath.endsWith(".css"))
            res.setHeader("Content-Type", "text/css");
          stream.pipe(res);
          return;
        }
      }

      handle(req, res, parsedUrl);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, () => console.log(`🚀 Server running on port ${port}`));
});
