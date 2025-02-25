
export const Form = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>Registro de alumnos</h3>

                </div>
                <div className="card-body">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="txtStudentId" className="form-label">Matricula</label>
                                <input type="Number" id="txtStudentId" className="form-control" name="student_id" />
                                {/* el name debe ser igual modelo de la base de datos */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtName" className="form-label"> Nombre</label>
                                <input type="text" id="txtName" className="form-control" name="name" />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtLastanme" className="form-label">Apellido</label>
                                <input type="txt" id="txtLastname" className="form-control" name="lastname" />
                                {/* el name debe ser igual modelo de la base de datos */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtGrade" className="form-label"> Grado </label>
                                <input type="Number" id="txtGrade" className="form-control" name="grade" />
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="txtGroup" className="form-label">Grupo</label>
                                <input type="txt" id="txtGroup" className="form-control" name="group" />
                                {/* el name debe ser igual modelo de la base de datos */}
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="txtAverage" className="form-label"> Calificacion </label>
                                <input type="Number " id="txtAverage" className="form-control" name="average " />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">

                                </div>
                            </div>


                            <div className="col-lg-12">
                                <br />
                                <button>Guardar</button>
                            </div>






                        </div>
                    </form>
                </div>
            </div>



        </>
    )
}
