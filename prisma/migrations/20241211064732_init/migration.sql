-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "companies" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "address" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" VARCHAR(255) NOT NULL,
    "companyId" VARCHAR(50),

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "companyId" VARCHAR(50) NOT NULL,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wells" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "address" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "placeId" VARCHAR(50) NOT NULL,

    CONSTRAINT "wells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "records" (
    "id" VARCHAR(50) NOT NULL,
    "dt" TIMESTAMP(3) NOT NULL,
    "wid" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "recid" TEXT NOT NULL,
    "seqid" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "actcode" TEXT NOT NULL,
    "blockpos" DOUBLE PRECISION NOT NULL,
    "bitdepth" DOUBLE PRECISION NOT NULL,
    "deptbitv" DOUBLE PRECISION NOT NULL,
    "md" DOUBLE PRECISION NOT NULL,
    "tvd" DOUBLE PRECISION NOT NULL,
    "logdepth" DOUBLE PRECISION NOT NULL,
    "speedup" DOUBLE PRECISION NOT NULL,
    "speeddown" DOUBLE PRECISION NOT NULL,
    "rop" DOUBLE PRECISION NOT NULL,
    "ropi" DOUBLE PRECISION NOT NULL,
    "timeropi" DOUBLE PRECISION NOT NULL,
    "hklda" DOUBLE PRECISION NOT NULL,
    "hkldx" DOUBLE PRECISION NOT NULL,
    "hkldpu" DOUBLE PRECISION NOT NULL,
    "hkldso" DOUBLE PRECISION NOT NULL,
    "woba" DOUBLE PRECISION NOT NULL,
    "wobx" DOUBLE PRECISION NOT NULL,
    "torqa" DOUBLE PRECISION NOT NULL,
    "torqx" DOUBLE PRECISION NOT NULL,
    "torqp" DOUBLE PRECISION NOT NULL,
    "torqb" DOUBLE PRECISION NOT NULL,
    "rpm" DOUBLE PRECISION NOT NULL,
    "rpmm" DOUBLE PRECISION NOT NULL,
    "totrpm" DOUBLE PRECISION NOT NULL,
    "stppress" DOUBLE PRECISION NOT NULL,
    "csgpress" DOUBLE PRECISION NOT NULL,
    "mudflowine" DOUBLE PRECISION NOT NULL,
    "mudflowin" DOUBLE PRECISION NOT NULL,
    "mudflowoute" DOUBLE PRECISION NOT NULL,
    "mudflowout" DOUBLE PRECISION NOT NULL,
    "mudflowoutp" DOUBLE PRECISION NOT NULL,
    "diffflow" DOUBLE PRECISION NOT NULL,
    "klflow" DOUBLE PRECISION NOT NULL,
    "muddensin" DOUBLE PRECISION NOT NULL,
    "muddensout" DOUBLE PRECISION NOT NULL,
    "mudtempin" DOUBLE PRECISION NOT NULL,
    "mudtempout" DOUBLE PRECISION NOT NULL,
    "mudcondin" DOUBLE PRECISION NOT NULL,
    "mudcondout" DOUBLE PRECISION NOT NULL,
    "mfiann" DOUBLE PRECISION NOT NULL,
    "mfianne" DOUBLE PRECISION NOT NULL,
    "surfrev" DOUBLE PRECISION NOT NULL,
    "drillrev" DOUBLE PRECISION NOT NULL,
    "reamrev" DOUBLE PRECISION NOT NULL,
    "circrev" DOUBLE PRECISION NOT NULL,
    "totrev" DOUBLE PRECISION NOT NULL,
    "drilltime" DOUBLE PRECISION NOT NULL,
    "reamtime" DOUBLE PRECISION NOT NULL,
    "circtime" DOUBLE PRECISION NOT NULL,
    "pumptime" DOUBLE PRECISION NOT NULL,
    "rotatingtime" DOUBLE PRECISION NOT NULL,
    "drilldist" DOUBLE PRECISION NOT NULL,
    "stroke1" DOUBLE PRECISION NOT NULL,
    "stroke2" DOUBLE PRECISION NOT NULL,
    "stroke3" DOUBLE PRECISION NOT NULL,
    "stroke4" DOUBLE PRECISION NOT NULL,
    "totstks" DOUBLE PRECISION NOT NULL,
    "totstksa" DOUBLE PRECISION NOT NULL,
    "spm1" DOUBLE PRECISION NOT NULL,
    "spm2" DOUBLE PRECISION NOT NULL,
    "spm3" DOUBLE PRECISION NOT NULL,
    "spm4" DOUBLE PRECISION NOT NULL,
    "spm5" DOUBLE PRECISION NOT NULL,
    "totspm" DOUBLE PRECISION NOT NULL,
    "totspma" DOUBLE PRECISION NOT NULL,
    "totpumpede" DOUBLE PRECISION NOT NULL,
    "totpumpvol" DOUBLE PRECISION NOT NULL,
    "totpumpvolan" DOUBLE PRECISION NOT NULL,
    "totpumpedea" DOUBLE PRECISION NOT NULL,
    "tankvoltot" DOUBLE PRECISION NOT NULL,
    "tankvolact" DOUBLE PRECISION NOT NULL,
    "tankvoltt" DOUBLE PRECISION NOT NULL,
    "tankvolchgtot" DOUBLE PRECISION NOT NULL,
    "tankvolchgact" DOUBLE PRECISION NOT NULL,
    "tankvolchgtt" DOUBLE PRECISION NOT NULL,
    "plbit" DOUBLE PRECISION NOT NULL,
    "plstr" DOUBLE PRECISION NOT NULL,
    "plann" DOUBLE PRECISION NOT NULL,
    "plsurf" DOUBLE PRECISION NOT NULL,
    "plmtr" DOUBLE PRECISION NOT NULL,
    "plmwd" DOUBLE PRECISION NOT NULL,
    "bithydpwr" DOUBLE PRECISION NOT NULL,
    "bithydpwra" DOUBLE PRECISION NOT NULL,
    "jif" DOUBLE PRECISION NOT NULL,
    "jetvel" DOUBLE PRECISION NOT NULL,
    "annveln" DOUBLE PRECISION NOT NULL,
    "annvelx" DOUBLE PRECISION NOT NULL,
    "ecddpt" DOUBLE PRECISION NOT NULL,
    "ecdbit" DOUBLE PRECISION NOT NULL,
    "ecdshoe" DOUBLE PRECISION NOT NULL,
    "phydpwr" DOUBLE PRECISION NOT NULL,
    "deptretm" DOUBLE PRECISION NOT NULL,
    "lagstks" DOUBLE PRECISION NOT NULL,
    "lagtime" DOUBLE PRECISION NOT NULL,
    "dnhstroke" DOUBLE PRECISION NOT NULL,
    "dnhtime" DOUBLE PRECISION NOT NULL,
    "mse" DOUBLE PRECISION NOT NULL,
    "doc" DOUBLE PRECISION NOT NULL,
    "gas" DOUBLE PRECISION NOT NULL,
    "dstrength" DOUBLE PRECISION NOT NULL,
    "mseds" DOUBLE PRECISION NOT NULL,
    "clcontent" DOUBLE PRECISION NOT NULL,
    "in_slips" TEXT,
    "bht" DOUBLE PRECISION NOT NULL,
    "scfm" DOUBLE PRECISION NOT NULL,
    "airflin" DOUBLE PRECISION NOT NULL,
    "airfline" DOUBLE PRECISION NOT NULL,
    "airfloutp" DOUBLE PRECISION NOT NULL,
    "airflout" DOUBLE PRECISION NOT NULL,
    "airpress" DOUBLE PRECISION NOT NULL,
    "airtemp" DOUBLE PRECISION NOT NULL,
    "whp" DOUBLE PRECISION NOT NULL,
    "wht" DOUBLE PRECISION NOT NULL,
    "h2s1" DOUBLE PRECISION NOT NULL,
    "h2s2" DOUBLE PRECISION NOT NULL,
    "h2s3" DOUBLE PRECISION NOT NULL,
    "h2s4" DOUBLE PRECISION NOT NULL,
    "co21" DOUBLE PRECISION NOT NULL,
    "co22" DOUBLE PRECISION NOT NULL,
    "co23" DOUBLE PRECISION NOT NULL,
    "co24" DOUBLE PRECISION NOT NULL,
    "bitsize" DOUBLE PRECISION NOT NULL,
    "foamrate" DOUBLE PRECISION NOT NULL,
    "spare_1" DOUBLE PRECISION NOT NULL,
    "spare_2" DOUBLE PRECISION NOT NULL,
    "spare_3" DOUBLE PRECISION NOT NULL,
    "spare_4" DOUBLE PRECISION NOT NULL,
    "spare_5" DOUBLE PRECISION NOT NULL,
    "spare_6" DOUBLE PRECISION NOT NULL,
    "spare_7" DOUBLE PRECISION NOT NULL,
    "spare_8" DOUBLE PRECISION NOT NULL,
    "spare_9" DOUBLE PRECISION NOT NULL,
    "spare_10" DOUBLE PRECISION NOT NULL,
    "spare_50" DOUBLE PRECISION NOT NULL,
    "spare_51" DOUBLE PRECISION NOT NULL,
    "spare_52" DOUBLE PRECISION NOT NULL,
    "spare_53" DOUBLE PRECISION NOT NULL,
    "spare_54" DOUBLE PRECISION NOT NULL,
    "spare_55" DOUBLE PRECISION NOT NULL,
    "spare_56" DOUBLE PRECISION NOT NULL,
    "label" TEXT,
    "posisiy" TEXT,
    "tipenote" TEXT,
    "idnote" TEXT,
    "wellId" VARCHAR(50) NOT NULL,

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "wellId" VARCHAR(50) NOT NULL,
    "Created-At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conditions" (
    "id" VARCHAR(50) NOT NULL,
    "name" TEXT NOT NULL,
    "wellId" VARCHAR(50) NOT NULL,

    CONSTRAINT "conditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ruleconditions" (
    "id" VARCHAR(50) NOT NULL,
    "conditionId" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "thresholdValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ruleconditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anomalylog" (
    "id" VARCHAR(50) NOT NULL,
    "actualValue" DOUBLE PRECISION NOT NULL,
    "thresholdValue" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anomalylog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wells" ADD CONSTRAINT "wells_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_wellId_fkey" FOREIGN KEY ("wellId") REFERENCES "wells"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_wellId_fkey" FOREIGN KEY ("wellId") REFERENCES "wells"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conditions" ADD CONSTRAINT "conditions_wellId_fkey" FOREIGN KEY ("wellId") REFERENCES "wells"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ruleconditions" ADD CONSTRAINT "ruleconditions_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "conditions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
