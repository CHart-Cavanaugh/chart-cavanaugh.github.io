export class ProjectPreview {

  static createProjectPreview(someThumbnail, somePreview) { return { _projectThumbnail: someThumbnail, _projectPreview: somePreview } }



  static getProjects(projectThumbnails, projectPreviews) {

    const projects = [];



    for (let i = 0; i < projectThumbnails.length; i++)
      projects.push(ProjectPreview.createProjectPreview(projectThumbnails[i], projectPreviews[i]));



    return projects;

  }

}