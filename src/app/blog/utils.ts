import fs from "fs";
import matter from "gray-matter";
import path from "path";

//get all the mdx files from the dir
function getMdxFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
//Read data from those files
function readMdxFiles(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}
//present the mdx data and metadata
function getMdxData(dir: string) {
  let mdxFiles = getMdxFiles(dir);

  return mdxFiles.map((file) => {
    let {data: metadata, content} = readMdxFiles(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMdxData(path.join(process.cwd(), 'src', 'app', 'blog', 'contents'));
}

export function getTermsOfServices() {
  return getMdxData(
    path.join(process.cwd(), 'src', 'app', 'terms-of-services'));
}

export function getPrivacyPolicy() {
  return getMdxData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (date.includes('T')) {
    date = `${date}T00:00:00`
  }

  let targetDate = new Date(date);

  let yearAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearAgo > 0) {
    formattedDate = `${yearAgo}y ago`;
  }else if(monthAgo > 0) {
    formattedDate = `${monthAgo}mo ago`;
  } else if(daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}